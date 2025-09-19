// Card props interface
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

// Button props interface
export interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export interface PropertyProps {
  name: string;
    address: {
      state: string;
      city: string;
      country: string;
    },
    rating: number;
    category: string[];
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    },
    image: string;
    discount: string;
  }