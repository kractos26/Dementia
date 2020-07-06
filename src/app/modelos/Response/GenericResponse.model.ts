
export class GenericResponse<T>{
  public IsProcesed: boolean;
  public ResultCode: string;
  public Message: string;
  public JSonResult: T[];
};
