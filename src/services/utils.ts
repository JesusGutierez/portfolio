const birthDate: Date = new Date(2001, 11, 23);

const calculateAge = () => {
  const diff_ms = Date.now() - birthDate.getTime();
  const age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

export { calculateAge };
