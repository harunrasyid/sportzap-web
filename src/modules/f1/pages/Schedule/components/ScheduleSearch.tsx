import { Field, Input } from "@chakra-ui/react";
import useScheduleYear from "../context/useScheduleYear";
import { color } from "@/shared/styles";

const ScheduleSearch = () => {
  const { countryCode, setCountryCode } = useScheduleYear()
  return (
    <div>
      <Field.Root required>
        <Field.Label>
          Search Country Code
        </Field.Label>
        <Input
          value={countryCode}
          onChange={e => setCountryCode(e.target.value)}
          placeholder="Search Country Code"
          backgroundColor={color.noirEclipse[800]}
          width={304}
          borderRadius={8}
          border={`1px solid ${color.noirEclipse[400]}`}
        />
      </Field.Root>
    </div>
  );
}

export default ScheduleSearch;
