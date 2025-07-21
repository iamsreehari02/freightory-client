import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type MembersCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
  company?: string;
};

export default function MembersCard({
  name,
  role,
  avatarUrl,
  company,
}: MembersCardProps) {
  return (
    <Card className="text-center">
      <CardHeader>
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-2" />
        )}
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      {company && (
        <CardContent>
          <p className="text-sm text-muted-foreground">{company}</p>
        </CardContent>
      )}
    </Card>
  );
}
