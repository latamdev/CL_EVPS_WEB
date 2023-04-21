export interface UploadResourceForm {
  title?: string;
  file?: File;
  poster?: File;
  description?: string | undefined;
  price?: number | undefined;
  teacher?: string | undefined;
  level?: number | undefined;
  tags?: Array<SelectTag> | undefined;
  resourceType?: number;
}

export interface SelectTag {
  value: string;
  label: string;
  __isNew__?: boolean;
}
