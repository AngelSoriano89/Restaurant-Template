export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: "new" | "read" | "replied";
  createdAt?: Date;
}

export interface ContactInfo {
  icon: React.ComponentType<any>;
  title: string;
  content: string | string[];
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}
