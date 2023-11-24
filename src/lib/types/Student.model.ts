import type User from "./User.model";

export type Sector = "ICT" | "BSN" | "HLW" | "ART";

interface Student extends User {
	type: "student";
	certs: string[];
	expLearning: string[];
	reqCerts: string[];
	reachAheads: string[];
	sector: Sector;
}

export default Student;