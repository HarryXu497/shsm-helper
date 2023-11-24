import type { Timestamp } from "@firebase/firestore";

type SHSMEventType = "SPE" | "Reach Ahead" | "Experiential Learning" | "Certification";

interface SHSMEvent {
	name: string;
	date: Timestamp;
	cert: string;
	sector: string[];
	type: SHSMEventType;
}


export default SHSMEvent;