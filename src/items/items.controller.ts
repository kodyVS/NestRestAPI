import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item} from './interfaces/item.interface'

// EXPRESS WAY OF HANDLING A REQUEST
// @Get()
// findAll(@Req() req: Request, @Res() res: Response): Response {
//     console.log(req.url)
//     return res.send('Hello World')
//    // return 'Get all items';
// }
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
@Get()
findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
}

// This will grab the params after the /items/ which is passed in the controller
@Get(':id')
findOne(@Param() param): Promise<Item> {
    return this.itemsService.findOne(param.id)
}

@Post()
create(@Body() createItemDto: CreateItemDto):Promise<Item> {
    return this.itemsService.create(createItemDto)
}
// This is simliar to the @Get('ID') id but it uses a better way for naming, we can get the id from the param class, and then set id equal to it directly
@Delete(':id')
delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id)
}

@Put(':id')
update(@Body() updateItemDto: CreateItemDto, @Param('id') id):Promise<Item>{
return this.itemsService.update(id, updateItemDto)
}
}


