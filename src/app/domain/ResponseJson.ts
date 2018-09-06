export class ResponseJson {

    private  _error: Boolean;
	  private  _result: Object;
	  private  _message: String;

    get error(): Boolean{
        return this._error;
    }
    set error(_error: Boolean){
        this._error = _error;
    }

    get result(): Object{
        return this._result;
    }
    set result(_result: Object){
        this._result = _result;
    }


    get message(): String{
        return this._message;
    }
    set message(_message: String){
        this._message = _message;
    }
}
