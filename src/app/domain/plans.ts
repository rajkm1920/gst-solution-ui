
export class Plan {
    private  _id: number;
	private  _statusId:number;
	private  _status:string;
	private  _planTitle:string;
	private  _description:string;
	private  _planType:string;
	private  _scheme:string;
	private  _monthlyInvoice:number;
	private  _monthlyAmt:DoubleRange;
	private  _quarterlyAmt:DoubleRange;
    private  _halfYearlyAmt:DoubleRange;
	private  _annuallyAmt:DoubleRange;
	private  _planAmount:DoubleRange;
	private  _planStartDate:string;
	private  _planEndDate:string;
	private  _createTime:string;
	private  _createdBy:number;

    /**
     * Getter monthlyAmt
     * @return {DoubleRange}
     */
	public get monthlyAmt(): DoubleRange {
		return this._monthlyAmt;
	}

    /**
     * Getter quarterlyAmt
     * @return {DoubleRange}
     */
	public get quarterlyAmt(): DoubleRange {
		return this._quarterlyAmt;
	}

    /**
     * Getter halfYearlyAmt
     * @return {DoubleRange}
     */
	public get halfYearlyAmt(): DoubleRange {
		return this._halfYearlyAmt;
	}

    /**
     * Getter annuallyAmt
     * @return {DoubleRange}
     */
	public get annuallyAmt(): DoubleRange {
		return this._annuallyAmt;
	}

    /**
     * Getter planAmount
     * @return {DoubleRange}
     */
	public get planAmount(): DoubleRange {
		return this._planAmount;
	}

    /**
     * Setter monthlyAmt
     * @param {DoubleRange} value
     */
	public set monthlyAmt(value: DoubleRange) {
		this._monthlyAmt = value;
	}

    /**
     * Setter quarterlyAmt
     * @param {DoubleRange} value
     */
	public set quarterlyAmt(value: DoubleRange) {
		this._quarterlyAmt = value;
	}

    /**
     * Setter halfYearlyAmt
     * @param {DoubleRange} value
     */
	public set halfYearlyAmt(value: DoubleRange) {
		this._halfYearlyAmt = value;
	}

    /**
     * Setter annuallyAmt
     * @param {DoubleRange} value
     */
	public set annuallyAmt(value: DoubleRange) {
		this._annuallyAmt = value;
	}

    /**
     * Setter planAmount
     * @param {DoubleRange} value
     */
	public set planAmount(value: DoubleRange) {
		this._planAmount = value;
	}


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
     * Getter planTitle
     * @return {string}
     */
	public get planTitle(): string {
		return this._planTitle;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter planType
     * @return {string}
     */
	public get planType(): string {
		return this._planType;
	}

    /**
     * Getter scheme
     * @return {string}
     */
	public get scheme(): string {
		return this._scheme;
	}

    /**
     * Getter monthlyInvoice
     * @return {number}
     */
	public get monthlyInvoice(): number {
		return this._monthlyInvoice;
	}

    /**
     * Getter planStartDate
     * @return {string}
     */
	public get planStartDate(): string {
		return this._planStartDate;
	}

    /**
     * Getter planEndDate
     * @return {string}
     */
	public get planEndDate(): string {
		return this._planEndDate;
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
     * Setter planTitle
     * @param {string} value
     */
	public set planTitle(value: string) {
		this._planTitle = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter planType
     * @param {string} value
     */
	public set planType(value: string) {
		this._planType = value;
	}

    /**
     * Setter scheme
     * @param {string} value
     */
	public set scheme(value: string) {
		this._scheme = value;
	}

    /**
     * Setter monthlyInvoice
     * @param {number} value
     */
	public set monthlyInvoice(value: number) {
		this._monthlyInvoice = value;
	}

    /**
     * Setter planStartDate
     * @param {string} value
     */
	public set planStartDate(value: string) {
		this._planStartDate = value;
	}

    /**
     * Setter planEndDate
     * @param {string} value
     */
	public set planEndDate(value: string) {
		this._planEndDate = value;
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

  }