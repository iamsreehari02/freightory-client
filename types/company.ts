export type Branch = {
  _id: string;
  companyId: string;
  name: string;
  country: string;
  city: string;
  contactPerson: string;
  email: string;
  phone: string;
  renewalDate: string; // ISO string
};

export type Container = {
  _id: string;
  companyId: string;
  containerId: string;
  country: string;
  port: string;
  unitsAvailable: number;
  availableFrom: string; // ISO string
  status: string;
  specialRate?: string;
  agentDetails?: string;
  isDeleted?: boolean;
};

export type Company = {
  _id: string;
  contactPerson: string;
  companyName: string;
  website?: string;
  headOfficeAddress: string;
  country: string;
  pinCode: string;
  freightType: "freight_forwarder" | "nvocc";
  currency: string;
  costPerBranch: number;
  branchCount: number;
  baseRegistrationFee: number;
  totalRegistrationCost?: number;
  gstNo?: string;
  isDeleted?: boolean;
  details?: Branch[] | Container[];
};
