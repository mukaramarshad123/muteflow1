function parseBooleanEnv(value: string | undefined) {
  if (!value) return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "on";
}

export const friendServicesEnabled = parseBooleanEnv(
  process.env.NEXT_PUBLIC_FRIEND_SERVICES,
);

