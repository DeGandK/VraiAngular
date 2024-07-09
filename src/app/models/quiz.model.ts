export interface Quiz {
  id: number;
  createAt: Date;
  hostUserId: number;
  isActive: boolean;
}

export interface Question {
  id: number;
  questionText: string;
  categoryId: number;
  answer: string;
  fausseReponseA: string;
  fausseReponseB: string;
  fausseReponseC: string;
  image: string;
  randomAnswer: string[];
}

export interface CategoryQuestion {
  id: number;
  categoryName: string;
  categoryCode: number;
  description: string;
}
export interface CompleteQuiz extends Quiz {
  monQuestionnaire: Question[];
  categoryQuestionnaire: CategoryQuestion[];
}
