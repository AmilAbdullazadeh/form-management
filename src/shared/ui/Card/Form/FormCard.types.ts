import { ReactNode } from "react";

import { Form } from "@/features/FormManagement/api/models/FormApiModel";
import { Variant } from "@/shared/types/variant";

export type BadgeVariant = Variant;

export type FormItem = Form;

export interface FormCardProps {
  title: string;
  subtitle?: string;
  badge?: Array<{
    text: string;
    variant: BadgeVariant;
  }>;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
  metadata?: Array<{
    icon?: ReactNode;
    text: string;
  }>;
  actions?: ReactNode;
}