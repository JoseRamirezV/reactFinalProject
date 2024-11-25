export const setThemePreference = (isDark) => {
   document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
   window.localStorage.setItem('dark-mode', isDark);
};
