export type ServiceIconType = "fridge" | "washer" | "dishwasher" | "oven";

export type Service = {
  id: string;
  title: string;
  icon: ServiceIconType;
  teaser?: string;
  description: {
    main: string;
    note?: string;
  };
};

