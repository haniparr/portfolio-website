export const Badge = ({ children, icon: Icon }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4F0F7] text-[#957BAC] rounded-full text-sm font-medium">
      {Icon && <Icon size={18} />}
      {children}
    </div>
  );
};
