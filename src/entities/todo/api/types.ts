export interface GetAllTodosArgs {
  _page: number;
  _limit: number;
}

export interface CreateTodoDto {
  title: string;
}

export interface UpdateTodoTitleArgs {
  id: number;
  title: string;
}

export interface UpdateTodoStatusArgs {
  id: number;
  completed: boolean;
}
