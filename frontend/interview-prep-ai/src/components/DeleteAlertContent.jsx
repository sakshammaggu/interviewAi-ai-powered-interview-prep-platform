import React from 'react';

const DeleteAlertContent = ({ content, onDelete, onCancel, isLoading }) => {
    return (
        <div className='py-2'>
            <p className='text-sm text-slate-800'>{content}</p>

            <div className='flex justify-end gap-3 mt-6'>
                {onCancel && (
                    <button
                        className='text-xs text-slate-800 font-medium px-4 py-1.5 rounded-md hover:bg-slate-50'
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                )}
                <button
                    className='text-xs text-white bg-red-500 font-medium px-4 py-1.5 rounded-md hover:bg-red-600'
                    onClick={onDelete}
                    disabled={isLoading}
                >
                    {isLoading ? "Deleting..." : "Delete"}
                </button>
            </div>
        </div>
    );
};

export default DeleteAlertContent;
