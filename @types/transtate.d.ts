export interface BaseTranslation {
  title: string;
  subtitle: string;
  description: string;
  subdescription?: string;
  button?: string;

}

export interface HeroTranslation extends BaseTranslation {
  name: string;
  subtitle_span: string;
  subdescription_span: string;
}
export interface ResourcesTranslation extends BaseTranslation {
  subtitle_two: string;
}
type FormFieldTranslation = {
  label: string;
  placeholder: string;
  options?: { value: string; label: string }[];
};

export interface ContactsTranslation {
  title: string;
  button: string;
  form: {
    [field: string]: FormFieldTranslation;
  };
}
