'use client'

import { useFieldArray, useFormContext } from "react-hook-form"
import { RiUserAddLine, RiTeamLine, RiDeleteBinLine } from "react-icons/ri"

export function TabTeam() {
  const { control, register } = useFormContext()
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "team_members"
  })

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-4">
        <label className="block text-slate-300 font-medium text-sm">Team Members</label>
        <button 
          type="button"
          onClick={() => append({ name: "", role: "" })}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors whitespace-nowrap text-sm flex items-center"
        >
          <RiUserAddLine className="mr-2 w-4 h-4" />
          Add Member
        </button>
      </div>

      <div className="space-y-3">
        {/* Empty State */}
        {fields.length === 0 ? (
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-8 text-center">
            <RiTeamLine className="text-4xl text-slate-500 mb-3 w-10 h-10 flex items-center justify-center mx-auto" />
            <p className="text-slate-400">No team members added yet</p>
            <p className="text-slate-500 text-sm mt-1">Click "Add Member" to start</p>
          </div>
        ) : (
          /* List of Members */
          fields.map((field, index) => (
            <div key={field.id} className="bg-slate-700 border border-slate-600 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 text-xs mb-1">Name</label>
                    <input 
                      {...register(`team_members.${index}.name`)}
                      placeholder="Team member name" 
                      className="w-full bg-slate-600 border border-slate-500 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm" 
                      type="text" 
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs mb-1">Role</label>
                    <input 
                      {...register(`team_members.${index}.role`)}
                      placeholder="e.g., Frontend Developer" 
                      className="w-full bg-slate-600 border border-slate-500 rounded-lg px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm" 
                      type="text" 
                    />
                  </div>
                </div>
                
                <button 
                  type="button" 
                  onClick={() => remove(index)}
                  className="w-9 h-9 flex items-center justify-center bg-red-600 hover:bg-red-500 rounded-lg text-white transition-colors mt-5"
                >
                  <RiDeleteBinLine className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}