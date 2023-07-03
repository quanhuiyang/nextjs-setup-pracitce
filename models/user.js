import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
	email:{
		type: String,
		unique:[true, 'Email已經註冊!'],
		required:[true, '請輸入Email!'],
	},
	username:{
		type: String,
		required:[true, '請輸入用戶名'],
		match:[/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
		"用戶名須包含8-20字，且不能與現存用戶重複"]
	},
	image:{
		type: String,
	}
});

const User = models.User || model("User", UserSchema);

export default User;