function updateProfileInfo(profileData){
    const picture = document.getElementById('profile.photo')
    picture.src = profileData.photo;
    picture.alt = profileData.name;
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
})()