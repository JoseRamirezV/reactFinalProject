export const setThemePreference = (isDark) => {
   console.log(isDark);
   document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
   window.localStorage.setItem('dark-mode', isDark);
};
