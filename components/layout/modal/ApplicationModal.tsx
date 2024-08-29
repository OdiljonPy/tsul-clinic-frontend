import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ButtonCustom from "@/components/global/button";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  type: "phone" | "video";
}

const ApplicationModal = ({ open, setOpen, type }: props) => {
  return (
    <div className="bg-white">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className={"bg-white"}>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {/*<AlertDialogCancel>Cancel</AlertDialogCancel>*/}
            {/*<AlertDialogAction>Continue</AlertDialogAction>*/}
            <ButtonCustom text="Jo'natish" href="#" buttonType="secondary" />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ApplicationModal;
