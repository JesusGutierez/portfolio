import Snackbar from '@/components/Snackbar';
import React, { createContext, useContext, useState, ReactNode } from 'react'

type SnackbarType = "success" | "error" | "warning" | "info";

interface SnackbarState {
  message: string;
  type: SnackbarType;
  open: boolean;
}

interface SnackbarContextType {
  showSnackbar: (message: string, type?: SnackbarType) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({ message: "", type: "info", open: false });

  const showSnackbar = (message: string, type: SnackbarType = "info") => {
    setSnackbar({ message, type, open: true });
    setTimeout(() => setSnackbar({ message: "", type: "info", open: false }), 3000);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbar.open && <Snackbar message={snackbar.message} type={snackbar.type} />}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) throw new Error("useSnackbar must be used within a SnackbarProvider");
  return context;
};
