export const selectUser = (user) => {
	 console.log("You clicked on User", user.firstName ,user.lastName);
	return {
		 type: "USER_SELECTED",
		 payload: user
	}
};