import type { Sector } from "./Student.model";

type SHSMEventType = "SPE" | "Reach Ahead" | "Experiential Learning" | "Certification";

interface SHSMEvent {
	name: string;
	date: Date;
	description: string;
	cert: string[];
	sector: Sector[];
	type: SHSMEventType;
}


export default SHSMEvent;