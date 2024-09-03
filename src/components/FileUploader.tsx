"use client"
import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Button } from './ui/button'
type FileUploaderProps = {
  files: File[] | undefined,
  onChange: (files: File[]) => void
}
 const FileUploader = ({files, onChange}: FileUploaderProps) => {
  const onDrop = useCallback((acceptedfiles: File[]) => {
    onChange(acceptedfiles)
  }, [onChange])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className= "flex flex-col translate-x-8 ">
      {files && files?.length >0 ? (
        <Image src = {convertFileToUrl(files[0])} width = {1000} height = {1000} alt = "Uploaded image" className=  "max-h-[175px] mb-4  max-w-[175px] rounded-full overflow-hidden  object-cover" />
      ) : (
        <>
            <Image src = "/profile.svg" width = {175} height = {175} alt = "Upload" className= "object-cover mb-4" />

        </>
      )}
      <div {...getRootProps()}>
      <Button type = "button" variant = "outline" className= "rounded-full  mr-6 w-[12.5rem] object-cover " onClick = {() => {getInputProps()}}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1.5"><path className=" fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M14.5337 5.197C14.567 5.25527 14.6253 5.29689 14.7003 5.29689C16.7003 5.29689 18.3337 6.92841 18.3337 8.92619V13.8707C18.3337 15.8685 16.7003 17.5 14.7003 17.5H5.30033C3.29199 17.5 1.66699 15.8685 1.66699 13.8707V8.92619C1.66699 6.92841 3.29199 5.29689 5.30033 5.29689C5.36699 5.29689 5.43366 5.2636 5.45866 5.197L5.50866 5.09711C5.53739 5.03665 5.56687 4.97455 5.5968 4.9115C5.80999 4.46246 6.04585 3.96567 6.19199 3.6737C6.57533 2.92453 7.22533 2.50832 8.03366 2.5H11.9587C12.767 2.50832 13.4253 2.92453 13.8087 3.6737C13.9399 3.93592 14.1399 4.35833 14.3326 4.76545C14.3724 4.84942 14.4119 4.93274 14.4503 5.01387L14.5337 5.197ZM13.9253 8.39345C13.9253 8.80966 14.2587 9.14262 14.6753 9.14262C15.092 9.14262 15.4337 8.80966 15.4337 8.39345C15.4337 7.97725 15.092 7.63596 14.6753 7.63596C14.2587 7.63596 13.9253 7.97725 13.9253 8.39345ZM8.55866 9.68368C8.95033 9.29245 9.45866 9.08435 10.0003 9.08435C10.542 9.08435 11.0503 9.29245 11.4337 9.67536C11.817 10.0583 12.0253 10.566 12.0253 11.1071C12.017 12.2225 11.117 13.1299 10.0003 13.1299C9.45866 13.1299 8.95033 12.9218 8.56699 12.5388C8.18366 12.1559 7.97533 11.6482 7.97533 11.1071V11.0988C7.96699 10.5744 8.17532 10.0666 8.55866 9.68368ZM12.3087 13.4212C11.717 14.0122 10.9003 14.3785 10.0003 14.3785C9.12533 14.3785 8.30866 14.0372 7.68366 13.4212C7.06699 12.7969 6.72533 11.9811 6.72533 11.1071C6.71699 10.2414 7.05866 9.42564 7.67533 8.80133C8.30033 8.17703 9.12533 7.83574 10.0003 7.83574C10.8753 7.83574 11.7003 8.17703 12.317 8.79301C12.9337 9.41731 13.2753 10.2414 13.2753 11.1071C13.267 12.0144 12.9003 12.8302 12.3087 13.4212Z" fill="#ffffff"></path></svg>        
        <p className = "text-[0.85rem] font-semibold">Upload profile photo</p>
        </Button>
     </div> 
    </div>
  )
}
export default FileUploader;