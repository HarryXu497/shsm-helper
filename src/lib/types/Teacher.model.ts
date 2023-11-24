import type User from "./User.model";

interface Teacher extends User {
	type: "teacher";
	admin: boolean;
}

export default Teacher;