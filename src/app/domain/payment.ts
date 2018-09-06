export class Payment{

    private  _paymentId:number;
	private  _statusId:number;
	private  _customerId:number;
	private  _customerName:string;
	private  _paymentDate:string;
	private  _amount:DoubleRange;
	private  _orderId:number;
	private  _orderStatus;
	private  _status;
	private  _paymentMode;
	private  _createTime;
	private  _createdBy:number;
	private  _updateTime;
	private  _updatedBy:number;
	private  _gstPlanId:number;
	private  _serviceId:number;
    private  _paymentItems=[];	



    /**
     * Getter gstPlanId
     * @return {number}
     */
	public get gstPlanId(): number {
		return this._gstPlanId;
	}

    /**
     * Setter gstPlanId
     * @param {number} value
     */
	public set gstPlanId(value: number) {
		this._gstPlanId = value;
	}
    /**
     * Getter serviceId
     * @return {number}
     */
	public get serviceId(): number {
		return this._serviceId;
	}


    /**
     * Setter serviceId
     * @param {number} value
     */
	public set serviceId(value: number) {
		this._serviceId = value;
	}

    /**
     * Getter paymentId
     * @return {number}
     */
	public get paymentId(): number {
		return this._paymentId;
	}

    /**
     * Getter statusId
     * @return {number}
     */
	public get statusId(): number {
		return this._statusId;
	}

    /**
     * Getter customerId
     * @return {number}
     */
	public get customerId(): number {
		return this._customerId;
	}

    /**
     * Getter customerName
     * @return {string}
     */
	public get customerName(): string {
		return this._customerName;
	}

    /**
     * Getter paymentDate
     * @return {string}
     */
	public get paymentDate(): string {
		return this._paymentDate;
	}

    /**
     * Getter amount
     * @return {DoubleRange}
     */
	public get amount(): DoubleRange {
		return this._amount;
	}

    /**
     * Getter orderId
     * @return {number}
     */
	public get orderId(): number {
		return this._orderId;
	}

    /**
     * Getter createdBy
     * @return {number}
     */
	public get createdBy(): number {
		return this._createdBy;
	}

    /**
     * Getter updatedBy
     * @return {number}
     */
	public get updatedBy(): number {
		return this._updatedBy;
	}

    /**
     * Setter paymentId
     * @param {number} value
     */
	public set paymentId(value: number) {
		this._paymentId = value;
	}

    /**
     * Setter statusId
     * @param {number} value
     */
	public set statusId(value: number) {
		this._statusId = value;
	}

    /**
     * Setter customerId
     * @param {number} value
     */
	public set customerId(value: number) {
		this._customerId = value;
	}

    /**
     * Setter customerName
     * @param {string} value
     */
	public set customerName(value: string) {
		this._customerName = value;
	}

    /**
     * Setter paymentDate
     * @param {string} value
     */
	public set paymentDate(value: string) {
		this._paymentDate = value;
	}

    /**
     * Setter amount
     * @param {DoubleRange} value
     */
	public set amount(value: DoubleRange) {
		this._amount = value;
	}

    /**
     * Setter orderId
     * @param {number} value
     */
	public set orderId(value: number) {
		this._orderId = value;
	}

    /**
     * Setter createdBy
     * @param {number} value
     */
	public set createdBy(value: number) {
		this._createdBy = value;
	}

    /**
     * Setter updatedBy
     * @param {number} value
     */
	public set updatedBy(value: number) {
		this._updatedBy = value;
	}
    
}