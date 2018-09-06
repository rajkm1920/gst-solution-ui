export class StateAndCity{
    private _stateId:number;
    private _state:string;
    private _cityId:number;
    private _city:string;


    /**
     * Getter stateId
     * @return {number}
     */
	public get stateId(): number {
		return this._stateId;
	}

    /**
     * Getter state
     * @return {string}
     */
	public get state(): string {
		return this._state;
	}

    /**
     * Getter cityId
     * @return {number}
     */
	public get cityId(): number {
		return this._cityId;
	}

    /**
     * Getter city
     * @return {string}
     */
	public get city(): string {
		return this._city;
	}

    /**
     * Setter stateId
     * @param {number} value
     */
	public set stateId(value: number) {
		this._stateId = value;
	}

    /**
     * Setter state
     * @param {string} value
     */
	public set state(value: string) {
		this._state = value;
	}

    /**
     * Setter cityId
     * @param {number} value
     */
	public set cityId(value: number) {
		this._cityId = value;
	}

    /**
     * Setter city
     * @param {string} value
     */
	public set city(value: string) {
		this._city = value;
	}

}