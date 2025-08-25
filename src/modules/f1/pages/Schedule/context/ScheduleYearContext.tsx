import { createContext, useState, type ReactNode } from 'react';

export type ScheduleYearContextType = {
  year: string[];
  setYear: (year: string[]) => void;
  countryCode: string;
  setCountryCode: (countryCode: string) => void;
};

export const ScheduleYearContext = createContext<ScheduleYearContextType | undefined>(undefined);

export const ScheduleYearProvider = ({
  children,
  initialYear = ['2025'],
}: {
  children: ReactNode;
  initialYear?: string[];
}) => {
  const [year, setYear] = useState<string[]>(initialYear);
  const [countryCode, setCountryCode] = useState<string>('');

  return (
    <ScheduleYearContext.Provider value={{ year, setYear, countryCode, setCountryCode }}>
      {children}
    </ScheduleYearContext.Provider>
  );
};

// const useScheduleYear = (): ScheduleYearContextType => {
//   const ctx = useContext(ScheduleYearContext);
//   if (!ctx) {
//     throw new Error('useScheduleYear must be used within a ScheduleYearProvider');
//   }
//   return ctx;
// };

// export default useScheduleYear;
