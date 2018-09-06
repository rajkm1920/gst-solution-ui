export class GSTReportDomain{
    private _id:number;
    private _customerId:number;
    private _customerGstinId:number;
	private _customerGstin:string;
	private _genGstOppningAmount:DoubleRange;
	private _genPurchaseAmount:DoubleRange;
	private _genPurchaseGst:DoubleRange;
	private _genSaleAmount:DoubleRange;
	private _genSaleGst:DoubleRange;
	private _genPenaltyDays:DoubleRange;
	private _genPenaltyAmount:DoubleRange;
	private _genTotalAmount:DoubleRange;
	private _genPaidAomunt:DoubleRange;
	private _genDueAmount:DoubleRange;
	private _gstOppningAmount:DoubleRange;
	private _purchaseAmount:DoubleRange;
	private _purchaseGst:DoubleRange;
	private _saleAmount:DoubleRange;
	private _saleGst:DoubleRange;
	private _penaltyDays:DoubleRange;
	private _penaltyAmount:DoubleRange;
	private _totalAmount:DoubleRange;
	private _paidAomunt:DoubleRange;
	private _dueAmount:DoubleRange;
	private _startDate:string;
	private _endDate:string;
    private _month:number;
    private _year:number;
	private _createTime:string;
	private _createdBy:number;
	private _updateTime:string;
	private _updatedBy:number;
	private _updateCount:number;
	private _statusId:number;
    private _status:string;
    private _planType:string;
    private _planId:number;
    private _itrType:String;
    private _reportType:string;
    private _customerGstinPlanId:number;


    /**
     * Getter customerGstinPlanId
     * @return {number}
     */
	public get customerGstinPlanId(): number {
		return this._customerGstinPlanId;
	}

    /**
     * Setter customerGstinPlanId
     * @param {number} value
     */
	public set customerGstinPlanId(value: number) {
		this._customerGstinPlanId = value;
	}
    
    /**
     * Getter reportType
     * @return {string}
     */
	public get reportType(): string {
		return this._reportType;
	}

    /**
     * Setter reportType
     * @param {string} value
     */
	public set reportType(value: string) {
		this._reportType = value;
	}


    /**
     * Getter itrType
     * @return {String}
     */
	public get itrType(): String {
		return this._itrType;
	}

    /**
     * Setter itrType
     * @param {String} value
     */
	public set itrType(value: String) {
		this._itrType = value;
	}

    
    /**
     * Getter year
     * @return {number}
     */
	public get year(): number {
		return this._year;
	}

    /**
     * Setter year
     * @param {number} value
     */
	public set year(value: number) {
		this._year = value;
	}
    /**
     * Getter planType
     * @return {string}
     */
	public get planType(): string {
		return this._planType;
	}

    /**
     * Getter planId
     * @return {number}
     */
	public get planId(): number {
		return this._planId;
	}

    /**
     * Setter planType
     * @param {string} value
     */
	public set planType(value: string) {
		this._planType = value;
	}

    /**
     * Setter planId
     * @param {number} value
     */
	public set planId(value: number) {
		this._planId = value;
	}

    
    
    
 /**
     * Getter customerGstinId
     * @return {number}
     */
	public get customerGstinId(): number {
		return this._customerGstinId;
	}

    /**
     * Setter customerGstinId
     * @param {number} value
     */
	public set customerGstinId(value: number) {
		this._customerGstinId = value;
	}

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter customerId
     * @return {number}
     */
	public get customerId(): number {
		return this._customerId;
	}

    /**
     * Getter customerGstin
     * @return {string}
     */
	public get customerGstin(): string {
		return this._customerGstin;
	}

    /**
     * Getter genGstOppningAmount
     * @return {DoubleRange}
     */
	public get genGstOppningAmount(): DoubleRange {
		return this._genGstOppningAmount;
	}

    /**
     * Getter genPurchaseAmount
     * @return {DoubleRange}
     */
	public get genPurchaseAmount(): DoubleRange {
		return this._genPurchaseAmount;
	}

    /**
     * Getter genPurchaseGst
     * @return {DoubleRange}
     */
	public get genPurchaseGst(): DoubleRange {
		return this._genPurchaseGst;
	}

    /**
     * Getter genSaleAmount
     * @return {DoubleRange}
     */
	public get genSaleAmount(): DoubleRange {
		return this._genSaleAmount;
	}

    /**
     * Getter genSaleGst
     * @return {DoubleRange}
     */
	public get genSaleGst(): DoubleRange {
		return this._genSaleGst;
	}

    /**
     * Getter genPenaltyDays
     * @return {DoubleRange}
     */
	public get genPenaltyDays(): DoubleRange {
		return this._genPenaltyDays;
	}

    /**
     * Getter genPenaltyAmount
     * @return {DoubleRange}
     */
	public get genPenaltyAmount(): DoubleRange {
		return this._genPenaltyAmount;
	}

    /**
     * Getter genTotalAmount
     * @return {DoubleRange}
     */
	public get genTotalAmount(): DoubleRange {
		return this._genTotalAmount;
	}

    /**
     * Getter genPaidAomunt
     * @return {DoubleRange}
     */
	public get genPaidAomunt(): DoubleRange {
		return this._genPaidAomunt;
	}

    /**
     * Getter genDueAmount
     * @return {DoubleRange}
     */
	public get genDueAmount(): DoubleRange {
		return this._genDueAmount;
	}

    /**
     * Getter gstOppningAmount
     * @return {DoubleRange}
     */
	public get gstOppningAmount(): DoubleRange {
		return this._gstOppningAmount;
	}

    /**
     * Getter purchaseAmount
     * @return {DoubleRange}
     */
	public get purchaseAmount(): DoubleRange {
		return this._purchaseAmount;
	}

    /**
     * Getter purchaseGst
     * @return {DoubleRange}
     */
	public get purchaseGst(): DoubleRange {
		return this._purchaseGst;
	}

    /**
     * Getter saleAmount
     * @return {DoubleRange}
     */
	public get saleAmount(): DoubleRange {
		return this._saleAmount;
	}

    /**
     * Getter saleGst
     * @return {DoubleRange}
     */
	public get saleGst(): DoubleRange {
		return this._saleGst;
	}

    /**
     * Getter penaltyDays
     * @return {DoubleRange}
     */
	public get penaltyDays(): DoubleRange {
		return this._penaltyDays;
	}

    /**
     * Getter penaltyAmount
     * @return {DoubleRange}
     */
	public get penaltyAmount(): DoubleRange {
		return this._penaltyAmount;
	}

    /**
     * Getter totalAmount
     * @return {DoubleRange}
     */
	public get totalAmount(): DoubleRange {
		return this._totalAmount;
	}

    /**
     * Getter paidAomunt
     * @return {DoubleRange}
     */
	public get paidAomunt(): DoubleRange {
		return this._paidAomunt;
	}

    /**
     * Getter dueAmount
     * @return {DoubleRange}
     */
	public get dueAmount(): DoubleRange {
		return this._dueAmount;
	}

    /**
     * Getter startDate
     * @return {string}
     */
	public get startDate(): string {
		return this._startDate;
	}

    /**
     * Getter endDate
     * @return {string}
     */
	public get endDate(): string {
		return this._endDate;
	}

    /**
     * Getter month
     * @return {number}
     */
	public get month(): number {
		return this._month;
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
     * Getter updateCount
     * @return {number}
     */
	public get updateCount(): number {
		return this._updateCount;
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
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter customerId
     * @param {number} value
     */
	public set customerId(value: number) {
		this._customerId = value;
	}

    /**
     * Setter customerGstin
     * @param {string} value
     */
	public set customerGstin(value: string) {
		this._customerGstin = value;
	}

    /**
     * Setter genGstOppningAmount
     * @param {DoubleRange} value
     */
	public set genGstOppningAmount(value: DoubleRange) {
		this._genGstOppningAmount = value;
	}

    /**
     * Setter genPurchaseAmount
     * @param {DoubleRange} value
     */
	public set genPurchaseAmount(value: DoubleRange) {
		this._genPurchaseAmount = value;
	}

    /**
     * Setter genPurchaseGst
     * @param {DoubleRange} value
     */
	public set genPurchaseGst(value: DoubleRange) {
		this._genPurchaseGst = value;
	}

    /**
     * Setter genSaleAmount
     * @param {DoubleRange} value
     */
	public set genSaleAmount(value: DoubleRange) {
		this._genSaleAmount = value;
	}

    /**
     * Setter genSaleGst
     * @param {DoubleRange} value
     */
	public set genSaleGst(value: DoubleRange) {
		this._genSaleGst = value;
	}

    /**
     * Setter genPenaltyDays
     * @param {DoubleRange} value
     */
	public set genPenaltyDays(value: DoubleRange) {
		this._genPenaltyDays = value;
	}

    /**
     * Setter genPenaltyAmount
     * @param {DoubleRange} value
     */
	public set genPenaltyAmount(value: DoubleRange) {
		this._genPenaltyAmount = value;
	}

    /**
     * Setter genTotalAmount
     * @param {DoubleRange} value
     */
	public set genTotalAmount(value: DoubleRange) {
		this._genTotalAmount = value;
	}

    /**
     * Setter genPaidAomunt
     * @param {DoubleRange} value
     */
	public set genPaidAomunt(value: DoubleRange) {
		this._genPaidAomunt = value;
	}

    /**
     * Setter genDueAmount
     * @param {DoubleRange} value
     */
	public set genDueAmount(value: DoubleRange) {
		this._genDueAmount = value;
	}

    /**
     * Setter gstOppningAmount
     * @param {DoubleRange} value
     */
	public set gstOppningAmount(value: DoubleRange) {
		this._gstOppningAmount = value;
	}

    /**
     * Setter purchaseAmount
     * @param {DoubleRange} value
     */
	public set purchaseAmount(value: DoubleRange) {
		this._purchaseAmount = value;
	}

    /**
     * Setter purchaseGst
     * @param {DoubleRange} value
     */
	public set purchaseGst(value: DoubleRange) {
		this._purchaseGst = value;
	}

    /**
     * Setter saleAmount
     * @param {DoubleRange} value
     */
	public set saleAmount(value: DoubleRange) {
		this._saleAmount = value;
	}

    /**
     * Setter saleGst
     * @param {DoubleRange} value
     */
	public set saleGst(value: DoubleRange) {
		this._saleGst = value;
	}

    /**
     * Setter penaltyDays
     * @param {DoubleRange} value
     */
	public set penaltyDays(value: DoubleRange) {
		this._penaltyDays = value;
	}

    /**
     * Setter penaltyAmount
     * @param {DoubleRange} value
     */
	public set penaltyAmount(value: DoubleRange) {
		this._penaltyAmount = value;
	}

    /**
     * Setter totalAmount
     * @param {DoubleRange} value
     */
	public set totalAmount(value: DoubleRange) {
		this._totalAmount = value;
	}

    /**
     * Setter paidAomunt
     * @param {DoubleRange} value
     */
	public set paidAomunt(value: DoubleRange) {
		this._paidAomunt = value;
	}

    /**
     * Setter dueAmount
     * @param {DoubleRange} value
     */
	public set dueAmount(value: DoubleRange) {
		this._dueAmount = value;
	}

    /**
     * Setter startDate
     * @param {string} value
     */
	public set startDate(value: string) {
		this._startDate = value;
	}

    /**
     * Setter endDate
     * @param {string} value
     */
	public set endDate(value: string) {
		this._endDate = value;
	}

    /**
     * Setter month
     * @param {number} value
     */
	public set month(value: number) {
		this._month = value;
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

    /**
     * Setter updateCount
     * @param {number} value
     */
	public set updateCount(value: number) {
		this._updateCount = value;
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

}