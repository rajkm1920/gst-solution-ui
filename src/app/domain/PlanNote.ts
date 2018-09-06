import { Plan } from "./plans";


export class PlanNote {
    private  _planNote: String;
    private  _plans:Plan[];

    /**
     * Getter planNote
     * @return {String}
     */
	public get planNote(): String {
		return this._planNote;
	}

    /**
     * Getter plans
     * @return {Plan[]}
     */
	public get plans(): Plan[] {
		return this._plans;
	}

    /**
     * Setter planNote
     * @param {String} value
     */
	public set planNote(value: String) {
		this._planNote = value;
	}

    /**
     * Setter plans
     * @param {Plan[]} value
     */
	public set plans(value: Plan[]) {
		this._plans = value;
	}
    
}