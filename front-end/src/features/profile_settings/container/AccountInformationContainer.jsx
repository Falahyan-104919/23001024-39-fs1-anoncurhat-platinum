import FormAccountInformation from '../components/FormAccountInfromation';

export default function AccountInformation() {
  return (
    <div className="w-full bg-zinc-900 rounded-lg text-white">
      <div className="border-b p-4">
        <h3 className="text-3xl font-bold ml-4 text-white tracking-tight">
          Account Information
        </h3>
        <h6 className="text-xs font-bold ml-4 mt-1 text-zinc-400 tracking-tight">
          Change your account settings
        </h6>
      </div>
      <FormAccountInformation />
    </div>
  );
}
