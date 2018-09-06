
export class GSTServices{

    private _id:number;
	private _statusId:number;
	private _status:string;
	private _title:string;
	private _description:string;
	private _price:DoubleRange;
	private _createTime:string;
	private _createdBy:number;
	private _updateTime:string;
	private _updatedBy:number;
    

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter statusId
     * @return {number}
     */
	public get statusId(): number {
		return this._statusId;
	}

    /**
     * Getter status
     * @return {string}
     */
	public get status(): string {
		return this._status;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter price
     * @return {DoubleRange}
     */
	public get price(): DoubleRange {
		return this._price;
	}

    /**
     * Getter createTime
     * @return {string}
     */
	public get createTime(): string {
		return this._createTime;
	}

    /**
     * Getter createdBy
     * @return {number}
     */
	public get createdBy(): number {
		return this._createdBy;
	}

    /**
     * Getter updateTime
     * @return {string}
     */
	public get updateTime(): string {
		return this._updateTime;
	}

    /**
     * Getter updatedBy
     * @return {number}
     */
	public get updatedBy(): number {
		return this._updatedBy;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter statusId
     * @param {number} value
     */
	public set statusId(value: number) {
		this._statusId = value;
	}

    /**
     * Setter status
     * @param {string} value
     */
	public set status(value: string) {
		this._status = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter price
     * @param {DoubleRange} value
     */
	public set price(value: DoubleRange) {
		this._price = value;
	}

    /**
     * Setter createTime
     * @param {string} value
     */
	public set createTime(value: string) {
		this._createTime = value;
	}

    /**
     * Setter createdBy
     * @param {number} value
     */
	public set createdBy(value: number) {
		this._createdBy = value;
	}

    /**
     * Setter updateTime
     * @param {string} value
     */
	public set updateTime(value: string) {
		this._updateTime = value;
	}

    /**
     * Setter updatedBy
     * @param {number} value
     */
	public set updatedBy(value: number) {
		this._updatedBy = value;
	}
    
}