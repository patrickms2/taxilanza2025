<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarpetasTable extends Migration
{
    public function up()
    {
        Schema::create('carpetas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_doc")->nullable();
            $table->string

("id_user")->nullable();
            $table->string

("id_dep")->nullable();
            $table->integer

("privada")->nullable();
            $table->string

("nombre")->nullable();
            $table->string

("color")->nullable();
            $table->integer

("favorita")->nullable();
            $table->enum
("estado", ["Activo","Inactivo"],)->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('carpetas');
    }
}

