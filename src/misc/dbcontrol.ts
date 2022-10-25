import { IDBPDatabase, openDB } from "idb"
import { iProducts, iShoppingDB } from "./types"
import { INDEXCOLLECTION, NAMECOLLECTION } from "./const"

// create data base
const createDB = async (nameDB:string)=>{
    try{
        return openDB<iShoppingDB>(nameDB,1,{
        upgrade(db, oldVersion, newVersion, transaction) {
            switch(oldVersion){
                case 0:
                case 1:
                    const storeProduct = db.createObjectStore(NAMECOLLECTION,{
                        autoIncrement: true,
                        keyPath: 'id'
                    })
                    storeProduct.createIndex(INDEXCOLLECTION,INDEXCOLLECTION)
            }
        }
    })
    } catch (e){
        console.error('when executed the create database catch: ',e)
        return null
    }
}

// get data from db
const getAll = async (db:IDBPDatabase<iShoppingDB>,nameColl:typeof NAMECOLLECTION)=>{
    try{
        const tx = db.transaction(nameColl,'readonly')
        const store = tx.objectStore(nameColl)
        return await store.getAll() as unknown[]
    }catch(e){
        console.error('there is an error with getall method: ',e)
        return null
    }
}

const get = async (db:IDBPDatabase<iShoppingDB>,nameColl:typeof NAMECOLLECTION,req:number)=>{
    try{
        const tx = db.transaction(nameColl,'readonly')
        const store = tx.objectStore(nameColl)
        return await store.get(req)
    }catch(e){
        console.error('there is an error with getall method: ',e)
        return null
    }
}



// add data to db
const save = async (db:IDBPDatabase<iShoppingDB>,nameColl:typeof NAMECOLLECTION,item:iProducts)=>{
    try{
        const isInStore = item?.id && await get(db,nameColl,item.id)
        if(isInStore) return "Already in database"


        const tx = db.transaction(nameColl,'readwrite')
        const store = tx.objectStore(nameColl)

        const key = await store.add(item)
        await tx.done
        return key
    }catch(e){
        console.error('there is an error with remove method: ',e)
        return null
    }
}

// remove data from db
const remove = async (db:IDBPDatabase<iShoppingDB>,nameColl:typeof NAMECOLLECTION,key:number)=>{
    try{
        const tx = db.transaction(nameColl,'readwrite')
        const store = tx.objectStore(nameColl)

        const isInStore = await store.get(key)
        if(!isInStore) return "not found item, cannot remove"

        await store.delete(key)
        await tx.done
        return 'done'
    }catch(e){
        console.error('there is an error with remove method: ',e)
        return null
    }
}

// update data from db
const update = async (db:IDBPDatabase<iShoppingDB>,nameColl:typeof NAMECOLLECTION, item:iProducts)=>{
    try{

        const isInStore = item?.id && await get(db,nameColl,item.id)
        if(!isInStore) return "not found item, cannot update"


        const tx = db.transaction(nameColl,'readwrite')
        const store = tx.objectStore(nameColl)

        await store.put(item)
        await tx.done
        return 'done'
    }catch(e){
        console.error('there is an error with update method: ',e)
        return null
    }
}

export {
    createDB,
    get,
    getAll,
    save,
    remove,
    update,
}