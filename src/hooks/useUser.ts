import {
  TUser,
  getMockMembers,
  getMockExecutives,
  MockUsers,
  MockUser,
  MockProjectData,
  TProject,
  MockPollData,
  TPoll,
} from '../mock/MockUser';

export const useUser = () => {
  const user: TUser = MockUser();
  const allUsers: TUser[] = MockUsers();
  const allProjects: TProject[] = MockProjectData().filter(
    (project) => project.estate === user.default_estate.id
  );
  const allPolls: TPoll[] = MockPollData();

  const members = getMockMembers().filter(
    (member) => member.default_estate.id === user.default_estate.id
  );

  const executives = getMockExecutives().filter(
    (exec) => exec.default_estate.id === user.default_estate.id
  );

  const getUserInitials = `${user?.first_name ?? ''} ${user?.last_name ?? ''}`
    .trim()
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  const isAdmin = user?.role === 'admin';
  const getAvatarUri = user?.profile_image?.trim() || undefined;
  const getDisplayAddress = user?.default_estate?.address?.trim() || '';

  const runningProjects = allProjects.filter(
    (p) => Number(p.amount_raised) < Number(p.target_amount)
  );
  const getProjectsLength = allProjects?.length || 0;

  const completedProjects = allProjects.filter(
    (p) => Number(p.amount_raised) >= Number(p.target_amount)
  );

  const estateUserIds = allUsers
    .filter((u) => u.estates.some((e) => e.id === user.default_estate.id))
    .map((u) => u.id);

  const runningPolls = allPolls.filter(
    (poll) =>
      poll.pollStatus === 'pending' && estateUserIds.includes(poll.created_by)
  );

  const completedPolls = allPolls.filter(
    (poll) =>
      poll.pollStatus === 'completed' && estateUserIds.includes(poll.created_by)
  );

  return {
    user,
    allUsers,
    allPolls,
    getUserInitials,
    isAdmin,
    getAvatarUri,
    getDisplayAddress,
    getProjectsLength,
    projectsData: allProjects,
    runningProjects,
    completedProjects,
    members,
    executives,
    runningPolls,
    completedPolls,
  };
};
