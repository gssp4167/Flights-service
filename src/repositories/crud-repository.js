const {Logger}=require('../config');

class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            // console.log("Inside Repository");
            const response=await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the CRUD Repo: create');
            throw error;
        }
    }

    async destroy(data){
        try {
            const response=await this.model.destroy({
                where:{
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the CRUD Repo: destroy');
            throw error;
        }
    }

    async get(data){
        try {
            const response=await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the CRUD Repo: destroy');
            throw error;
        }
    }

    async getAll(){
        try {
            const response=await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the CRUD Repo: destroy');
            throw error;
        }
    }

    async update(id,data){//data is an object containing col,val
        try {
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the CRUD Repo: destroy');
            throw error;
        }
    }

}

module.exports=CrudRepository;