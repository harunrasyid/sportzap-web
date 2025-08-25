import { color } from "@/shared/styles";
import { createListCollection, Select } from "@chakra-ui/react";
import { useScheduleYear } from "../context/useScheduleYear";

const years = createListCollection({
  items: [
    { label: "2025", value: "2025" },
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
  ],
})

const ScheduleFilterYear = () => {
  const { year, setYear } = useScheduleYear();

  return (
    <div>
      <Select.Root collection={years} width={304} value={year} onValueChange={(e) => setYear(e.value)}>
        <Select.HiddenSelect />
        <Select.Label textAlign={'left'}>Select Year</Select.Label>

        <Select.Control>
          <Select.Trigger border={`1px solid ${color.noirEclipse[400]}`} backgroundColor={color.noirEclipse[800]}>
            <Select.ValueText placeholder="Select Year" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
            {/* <Select.ClearTrigger /> */}
          </Select.IndicatorGroup>
        </Select.Control>

        <Select.Positioner>
          <Select.Content>
            {years.items.map((year) => (
              <Select.Item item={year} key={year.value}>
                {year.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    </div>
  );
}

export default ScheduleFilterYear;
