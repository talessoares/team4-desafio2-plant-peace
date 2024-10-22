export interface CardsProps {
  title: string;
  description: string;
  icon: string;
}

export interface SectionStepsProps {
  title: string;
  description: string;
  cards: CardsProps[];
}