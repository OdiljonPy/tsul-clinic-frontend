function formatPhoneNumber(phone?: string) {
  const regex = /^\+998(\d{2})(\d{3})(\d{2})(\d{2})$/;
  if (!phone) return phone;
  return phone.replace(regex, "($1) $2-$3-$4");
}

export default formatPhoneNumber;