/// <reference types="vite/client" />
import { EmployeesData } from './type'

interface EmployeeProps {
    mail: string,
    postalAddress: string
}


export async function getEmployeesFromGrist (companyId: number) {
  const filter = {'ref_company_id':[companyId]}
  const encryptedFilter = encodeURIComponent(JSON.stringify(filter))
  const response = await fetch(`/api/grist/tables/Employees/records?filter=${encryptedFilter}`)
  const data = await response.json()

  return data.records
}

export async function CancelEmployeesFromGrist ( ids:number[]) {
  try {
    const response = await fetch('/api/grist/tables/Employees/records/delete', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ids)
    })
  } catch (error) {
    throw new Error('Erreur de connexion')
  }
}

export async function SendEmployeesToGrist({rows, companyId}: {rows:string[][], companyId:number}) {

  const records = rows.map((row) => {
    const postalAddress = `${row[1] ?? ''} ${row[2] ?? ''}, ${row[3] ?? ''} ${row[4] ?? ''}`.trim()

    return {
      fields: {
        'email': row[0],
        'postal_address': postalAddress,
        'ref_company_id': companyId
      }
    }
  })

  try {
    const response = await fetch('/api/grist/tables/Employees/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ records })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || 'Erreur lors de l\'enregistrement groupé sur Grist.')
    }

    return await response.json()

  } catch (error) {
    if (error instanceof Error) throw error
    throw new Error('Erreur de connexion au serveur de Grist lors de l\'envoi groupé.')
  }
}
