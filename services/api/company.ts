import { api } from "@/lib/api";
import { Company } from "@/types/company";

export const getAllCompanies = async (): Promise<Company[]> => {
  const { data } = await api.get("/companies");
  return data.data;
};

export const getCompanyById = async (id: string): Promise<Company> => {
  const { data } = await api.get(`/companies/${id}`);
  return data.data;
};
