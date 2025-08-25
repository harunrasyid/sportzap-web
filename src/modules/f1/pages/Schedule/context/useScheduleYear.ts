import { useContext } from 'react';
import { ScheduleYearContext, type ScheduleYearContextType } from './ScheduleYearContext';

export const useScheduleYear = (): ScheduleYearContextType => {
  const ctx = useContext(ScheduleYearContext);
  if (!ctx) {
    throw new Error('useScheduleYear must be used within a ScheduleYearProvider');
  }
  return ctx;
};

export default useScheduleYear;
