export const updatePofileData = (profileForm, profileData) => {
    profileData.fullname && `${ profileForm.querySelector("#firstname").value = profileData.fullname.split(" ")[0] }`
    profileData.fullname && `${ profileForm.querySelector("#lastname").value = profileData.fullname.split(" ")[1] }`
    profileData.userEmail && `${ profileForm.querySelector("#email").value = profileData.userEmail }`
}