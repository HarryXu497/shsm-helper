import type User from "./User.model";

interface Teacher extends User {
	type: "teacher";
}

export default Teacher;