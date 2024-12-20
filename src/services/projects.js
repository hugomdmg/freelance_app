import api from './api'


export const updateProject = async (selectedProject, user) => {
    const data = { project: selectedProject, email: user.email }
    const res = await api.post('/update-project', data)
    return(res.data)

}

export const deleteProject = async (project, user) => {
    try {
        const data = { project, email: user.email };
        const res = await api.post('/delete-project', data);

        if (res.data) {
            return(res.data)
        }
    } catch (error) {
        console.error("Error al eliminar el proyecto:", error);
        return user
    } 
};

export const createProject = async (user) => {
    try {
        const res = await api.post('/create-project', user);
        
        if (res.data) {
            return(res.data);
        }
    } catch (error) {
        console.error("Error al crear el proyecto:", error);
        return(user)
    }
};

export const changeStatus = async (project, user) => {
        try {
            const updatedProjects = [...user.projects];
            const index = updatedProjects.findIndex(p => p.id === project.id);
            if (index !== -1) {
                const status = updatedProjects[index].status === 'Finished' ? 'Not Finished' : 'Finished';
                updatedProjects[index] = { ...updatedProjects[index], status };

                const res = await api.post('/update-project', { email: user.email, project: updatedProjects[index] });

                if (res.data) {
                    return({ ...user, projects: updatedProjects });
                }
            }
        } catch (error) {
            console.error("Error:", error);
            return user
        }
};