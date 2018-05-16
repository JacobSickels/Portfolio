import database from '../firebase/firebase';

//Dispatching project data to redux
export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    projects
});

// Getting Project Data from Firebase
export const startSetProjects = () => {
    return (dispatch) => {

        return database.ref('projects')
            .once('value')
            .then((snapshot) => {
                
                console.log(snapshot.val());
                const projects = [];

                snapshot.forEach((childSnapshot) => {
                    projects.push(childSnapshot.val());
                });

                console.log(projects);

                //Dispatching projects to redux
                dispatch(setProjects(projects));

            });
    }
}
