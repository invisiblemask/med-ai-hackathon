"use client";

import React, { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  if (typeof window === "object") {
    return createPortal(
      <div className="fixed inset-0 z-50 bg-white/5 backdrop-blur">
        <dialog
          ref={dialogRef}
          className="bg-white rounded-lg lg:max-w-4xl flex flex-col items-center w-full lg:w-auto left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          onClose={onDismiss}
        >
          {children}
          <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 disabled:pointer-events-none">
            <div onClick={onDismiss} className="h-4 w-4">X</div>
            <span className="sr-only">Close</span>
          </div>
        </dialog>
      </div>,
      document.getElementById("modal-root")!
    );
  }

  return null;
}